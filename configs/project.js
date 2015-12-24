import path from 'path';

const projectRootPath = path.resolve(__dirname, '../');
const srcPath = path.resolve(projectRootPath, 'src');
const distPath = path.resolve(projectRootPath, 'dist');

const devServer = {
  host: 'localhost',
  port: 8999
}

export default {
  projectRootPath,
  srcPath,
  distPath,
  devServer
};
