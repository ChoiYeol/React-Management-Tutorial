const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cons = require('consolidate'),
      dust = require('dustjs-helpers'),
      app = express();
const port = process.env.PORT || 5000;

// postgresql 에서 db 값을 가져오기위한 데이터
const Pool = require('pg-pool');
const config = {
  user: 'postgres',
  password:'dufdlsla*814',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
};
let pool = new Pool(config);


const multer = require('multer');
const upload = multer({dest:'./upload'});

//Assign Dust engine to dust
app.engine('dust', cons.dust);

//set default ext .dustjs
app.set('view engine', 'dust');
app.set('views', __dirname +'/views');

//public 현재 디렉토리 + public폴더  가 path.join의 역할  즉 저 경로를 express에서 바로 사용하게끔 use해주는것
//app.use(express.static(path.join(__dirname , 'public')));


//위와 동일한 방식클라에서 /image 경로로 접근하면 upload 폴더로 접근 가능하다는뜻
app.use('/image',express.static('./upload'));

app.post('/api/customers', upload.single('image'),(req, res)=>{
  let image = '/image/' +req.file.filenam;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(image);
  console.log(name);
  console.log(birthday);
  console.log(gender);
  console.log(job);

  let sql = {
  text: 'INSERT INTO recipes (image, name , birthday, gender, job ) VALUES ($1, $2, $3, $4, $5)',
  values: [image ,name ,birthday ,gender , job]
  }
  //let params = [image, name , birthday, gender, job];
  //let sql = `INSERT INTO recipes (image, name , birthday, gender, job ) VALUES (${image},${name},${birthday},${gender},${job})`;
  pool.connect().then(client => {
    client.query(sql).then(result => {
      client.release()
      //    res.send(result.rows);
    console.log('insert query:', sql )
    })
    .catch(e => {
      client.release()
      console.error('insert query error', e.message, e.stack)
    })
  })
})
//바디 파서를 위해 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/customers', (req, res)=>{
  pool.connect().then(client => {
    client.query('select *from recipes').then(result => {
      client.release()
      res.send(result.rows);
    console.log('return json type:', result.rows)
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  })

});
app.listen(port , ()=>console.log(`Listening on port ${port}`));
