testApp.controller('TestController', function ($scope, customerFactory) {
    $scope.customersJson = [];
    $scope.customersLS = [];

    init();

    function init() {
        customerFactory.getCustomersFromJson().then(function(data) {
            $scope.customersJson = data;
        });

        refreshFromLocalStorage();
    };

    function refreshFromLocalStorage() {
        $scope.customersLS = customerFactory.getCustomersFromLS();
    }

    $scope.addCustomerToLS = function() {
        var customer = { name: $scope.newCustomer.name, city: $scope.newCustomer.city };

        customerFactory.addCustomerToLS(customer);
        refreshFromLocalStorage();

        $scope.newCustomer = {};
    }

    $scope.removeCustomerFromLS = function(name) {
        customerFactory.removeCustomerFromLS(name);
        refreshFromLocalStorage();
    }
});