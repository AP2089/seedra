const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');
const sharp = require('sharp');
const server = jsonServer.create();
const db = require(path.join(__dirname, 'db'));
const router = jsonServer.router(db.request);
const productionPath = path.join(__dirname, '..', 'public');
const developmentPath = path.join(__dirname);
const uploadsDevelopmentPath = path.join(__dirname, 'uploads');
const publicPath = process.env.VITE_APP_NODE_ENV === 'production' ? productionPath : developmentPath;

const middlewares = jsonServer.defaults({
  static: publicPath
});

const port = process.env.PORT || 9000;
const copyFiles = require('./helpers/copyFiles');

server.use(middlewares);

router.render = (req, res) => {
  const pathname = req._parsedUrl.pathname.slice(1);
  const result = res.locals.data;
  let response = db.response[pathname];

  if (/^blog|article|catalog|favorites$/.test(pathname)) {
    response = db.response[pathname](result);
  }

  res.jsonp(response);
}

server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, async () => {
  if (process.env.VITE_APP_NODE_ENV === 'production') {
    await copyFiles(
      path.join(__dirname, 'uploads'),
      path.join(publicPath, 'uploads')
    );
      
    console.log(`App running at \x1b[36m${process.env.VITE_APP_SERVER_URL}\x1b[0m`);
  } else {
    console.log(`Server running on port ${port}`);
  } 
});

fs.watch(uploadsDevelopmentPath, async (eventType, filename) => {
  try {
    const imageExt = path.parse(filename).ext.slice(1);
    const imageSrcPath = path.join(uploadsDevelopmentPath, filename);
    const permissibleExt = ['jpg', 'jpeg', 'png', 'gif']

    if (fs.existsSync(imageSrcPath) && permissibleExt.includes(imageExt)) {
      const imageName = path.parse(filename).name;
      const imageOutPath = path.join(uploadsDevelopmentPath, `${imageName}.webp`);

      await sharp(imageSrcPath)
        .webp()
        .toFile(imageOutPath);
    }
  } catch (error) {
    console.log(error);
  }
});