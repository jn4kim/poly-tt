// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('polyu-scheduler', ['ionic', 'polyu-scheduler.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if(window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.StatusBar) {
    StatusBar.styleDefault();
  }
});
})



.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  $urlRouterProvider.otherwise('/home')

/*
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home-screen.html'
  })
*/

 $stateProvider.state('tab', {
 url: "/tab",
 abstract: true,
 templateUrl: "templates/tabs.html"
 })

 $stateProvider.state('tab.timetable', {
   url: '/timetable',
   views: {
     'tab-timetable': {
       templateUrl: 'templates/tab-timetable.html',
     }
   }
 })

 $stateProvider.state('tab.notification', {
   url: '/notification',
   views: {
     'tab-notification': {
       templateUrl: 'templates/tab-notification.html',
     }
   }
 })

 $stateProvider.state('tab.share', {
   url: '/share',
   views: {
     'tab-share': {
       templateUrl: 'templates/tab-share.html',
     }
   }
 })



  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home-screen.html'
  })

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login-screen.html',
  })

  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'templates/main-screen.html'
  })




});