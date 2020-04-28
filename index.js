let meInfo = {
    age: 23,
    name: 'Yousef Nourizadeh',
    profission: 'Software Engineer',
    target: 'Getting Rich',
    GetInfo: function() {
        console.log(name + ' ' + age);
    },
    SetInfo: function(target) {
        this.target = target;
    }
}

console.log(meInfo.target);