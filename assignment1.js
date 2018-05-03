new Vue({
    el: '#exercise',
    data: {
        yourName:   'Jon',
        yourAge:    44,
        imageSrc:  'http://boinc.drugdiscoveryathome.com/user_profile/images/327.jpg' 
    },
    methods: {
        randNum: function () {
            return Math.random();
        }
    }
});