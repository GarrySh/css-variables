import gulp from 'gulp';

// import build from './gulp/tasks/build';
import { publish } from './gulp/tasks/deploy';

// gulp.task('build', build);
gulp.task('publish', publish);

// gulp.task('default', ['build']);
gulp.task('default', done => {
  console.log('fine');
  done();
});
