// import * as action from './action';
// import * as DBA from './dbAction';
import * as lib from './library';
import * as exs from 'express';
// import * as zipstream  from 'zipstream';

let router: any = exs.Router();

router.get('/getAllMovieInfos', async function (req, res) {
  // lib.systemLog('HAAAA');
  let movieInfos = await action.requestAllMovieInTheater();
  await DBA.upsertMovieInfos(movieInfos);
  lib.systemLog('OK');
  res.send("")
})

router.get('/getAllCinemasInfos', async function (req, res) {
  let cinemasInfos = await action.requestAllCinemas();
  await DBA.upsertCinemasInfos(cinemasInfos);
  res.send("checkCarClass OK")
})

router.get('/getmovieTimeInfos', async function (req, res) {
  let movieInfos = await action.requestAllMovieInTheater();
  let id = [];
  for (let element of movieInfos) {
    id.push(element.movie_id);
  }
  let urls = await action.makeAllMovieTimeUrl(id);
  lib.systemLog('checkStation');
  lib.debugLog('urls', urls);
  let timeInfos = await action.requestMovieTimeTable(urls);
  await DBA.insertMovieTimeInfos(timeInfos);
  res.send("checkStation OK")
})


export = router;


