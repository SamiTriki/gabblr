angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/index.html","<!DOCTYPE html>\n<html ng-app=\"gabblr\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <title>gabblr</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\" />\n        <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n        <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\n        <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" href=\"deps.css\">\n        <script type=\"text/javascript\" src=\"deps.js\"></script>\n        <script type=\"text/javascript\" src=\"app.js\"></script>\n        <script type=\"text/javascript\" src=\"templates.js\"></script>\n    </head>\n\n    <body ng-controller=\"MainCtrl\">\n        <nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"#\">Gabblr</a>\n                </div>\n                <ul class=\"nav navbar-nav navbar-right\" ng-hide=\"window.user\">\n                        <li><a href=\"#signup\">Signup</a></li>\n                        <li><a href=\"#login\">Login</a></li>\n                </ul>\n            </div>\n        </nav>\n        alright\n         <div class=\"ui-view\"></div>\n\n        <footer>\n            \n        </footer>\n    </body>\n</html>\n\n<!--      later on           <div class=\"nav navbar-nav navbar-right\" ng-show=\"window.user\">\n                        Hello, {{ $window.user.email }}\n                </div> -->");}]);