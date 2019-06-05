module.exports = (app) => {
  //api = pasta api carregada pelo consign - user = nome do arquivo - save = funcao exportada pelo arquivo (módulo) user
  app.post('/signup', app.api.user.save)
}
