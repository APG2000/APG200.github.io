﻿define(['durandal/app'], function (app) {
    var page = function () {
        this.displayName = 'Bem vindos ao meu projeto!';

        self.baseUri = ko.observable('https://api.themoviedb.org/3/movie/popular?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1');//api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

        self.records = ko.observableArray([]);
        

        self.activate = function () {
            showLoading();

            var composedUri = self.baseUri();
            ajaxHelper(composedUri, 'GET').done(function (data) {
               

                hideLoading();
                self.records(data.results);

            });
            hideLoading();

            
            
        };


     

       
        self.activate();

        console.clear()

    

    
    };

    getDate = function (date) {
        var d = new Date(date);

        return d.getFullYear().pad(4);
    }

    
   
    return page;

});

       

