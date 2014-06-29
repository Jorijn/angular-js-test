testApp.factory('customerFactory', function($http, localStorageService) {
    var factory = {};

    factory.getCustomersFromJson = function() {
        var promise = $http({ method: 'GET', url: '/api/customers.json', cache: true })
            .then(function (response) {
                return response.data;
            });

        return promise;
    };

    factory.getCustomersFromLS = function() {
        var customers = localStorageService.get('customers');

        if (customers === null) {
            return [];
        }

        return customers;
    };

    factory.addCustomerToLS = function(customer) {
        var customers = factory.getCustomersFromLS();
        customers.push(customer);

        localStorageService.set('customers', customers);
    };

    factory.removeCustomerFromLS = function(name) {
        var customers = factory.getCustomersFromLS();

        for (var i = customers.length - 1; i >= 0; i--) {
            if (name === customers[i].name)
            {
                customers.splice(i, 1);
                break;
            }
        };

        localStorageService.set('customers', customers);
    };

    return factory;
});