document.addEventListener('DOMContentLoaded', function () {
    Vue.component('hello',{
        template:  '<h1>Component Template</h1>'
    })
    
    var vm1 = new Vue({
        data: {
            title: "The Vue Instance",
            showParagraph: false
        },
        methods: {
            show: function () {
                this.showParagraph = true;
                this.updateTitle("The Vue instance (Updated)");
                this.$refs.btnShow.innerText = "Test";
            },
            updateTitle: function (title) {
                this.title = title
            }
        }
    });

    vm1.$mount('#app1');
    setTimeout(function () {
        vm1.show();
    }, 2000);

    var vm2 = new Vue({
        el: '#app2',
        data: {
            title: "The Second Vue Instance",
            showParagraph: false
        },
        methods: {
            show: function () {
                this.showParagraph = true;
                this.updateTitle("The Second Vue instance (Updated)");
            },
            onChange: function () {
                vm1.title = "Update from VM2";
            },
            updateTitle: function (title) {
                this.title = title
            }
        }
    });

    var vm3 = new Vue({
        el: '.hello',
        template: '<h1>Mounted Template</h1>'
    });




    //vm3.$mount('#app3');

});