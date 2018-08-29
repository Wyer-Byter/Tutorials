new Vue({
    el: '#exercise',
    data: {
        currentEffect: 'shrink',
        font: 'fontSettings',
        userEntryClass: '',
        userEntryClass2: '',
        userEntry: false,
        userEntryStyle: '',
        progressWidth: 10,
        progressStyleWidth: '0px'
    },
    methods: {
      startEffect: function() {
          var vm = this;
          setInterval(function() {
              vm.currentEffect = vm.currentEffect==='highlight' ? 'shrink' : 'highlight';
          }, 1000);
      },
      startProgress: function() {
          var vm = this;
          setInterval(function() {
              vm.progressWidth = vm.progressWidth + 1;
              vm.progressStyleWidth = vm.progressWidth + 'px';
          }, 500);
      }
    }
  });
  