(function(){
    'use strict';

    function DemoController($scope, PageService, $http, $compile){
        $scope.pages = PageService.getAllPages();
        $scope.selectPage = selectPage;

        //init
        selectPage($scope.pages[0]);

        function selectPage(aPage){
            $scope.selectedPage = aPage;

            $http.get('http://codepen.io/iamisti/pen/'+aPage.codepen+'.html').then(function(content){
                angular.element('#myDiv').empty().append($compile(content.data)($scope));
            });
        }
    }

    function PageService(){
        var service = this;

        service.getAllPages = getAllPages;

        var pages = [
            {
                name: 'Basic',
                codepen: 'mVOKEw'
            },{
                name: 'Table card',
                codepen: 'bEBKgK'
            },{
                name: 'Selectable rows',
                codepen: 'bEBKRj'
            },{
                name: 'Sortable columns',
                codepen: 'dGOKzN'
            },{
                name: 'Pagination',
                codepen: 'GoNGMy'
            },{
                name: 'Search',
                codepen: 'bEBKYx'
            },{
                name: 'Animated sort icon',
                codepen: 'MKbXOM'
            }/*,{
             name: 'Ripple effect',
             codepen: 'xZRzpV'
             }*/
        ];

        function getAllPages(){
            return pages;
        }
    }

    //already defined in external resources
    angular.module('demo', ['ngMaterial',
        'exampleApp',
        'exampleApp2',
        'exampleApp3',
        'exampleApp4',
        'exampleApp5',
        'exampleApp6',
        'exampleApp7',
        'exampleApp8'
    ]);

    angular.module('demo').service('PageService', PageService);
    angular.module('demo').controller('DemoController', DemoController);
}());