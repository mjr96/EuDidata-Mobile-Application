angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.simulados', {
    url: '/paginaSimulados',
    views: {
      'tab1': {
        templateUrl: 'templates/simulados.html',
        controller: 'simuladosCtrl'
      }
    }
  })

  .state('tabsController.calendRio', {
    url: '/paginaCalendario',
    views: {
      'tab2': {
        templateUrl: 'templates/calendRio.html',
        controller: 'calendRioCtrl'
      }
    }
  })

  .state('tabsController.notCias', {
    url: '/paginaNoticia',
    views: {
      'tab3': {
        templateUrl: 'templates/notCias.html',
        controller: 'notCiasCtrl'
      }
    }
  })

  .state('tabsController.agenda', {
    url: '/paginaAgenda',
    views: {
      'tab4': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  })

  .state('tabsController.estatSticas', {
    url: '/paginaEstatistica',
    views: {
      'tab5': {
        templateUrl: 'templates/estatSticas.html',
        controller: 'estatSticasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.disciplinas', {
    url: '/paginaDisciplinas',
    views: {
      'tab1': {
        templateUrl: 'templates/disciplinas.html',
        controller: 'disciplinasCtrl'
      }
    }
  })

  .state('tabsController.concursos', {
    url: '/paginasConcursos',
    views: {
      'tab1': {
        templateUrl: 'templates/concursos.html',
        controller: 'concursosCtrl'
      }
    }
  })

  .state('tabsController.enem', {
    url: '/paginaEnem',
    views: {
      'tab1': {
        templateUrl: 'templates/enem.html',
        controller: 'enemCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/paginaNoticia')


});