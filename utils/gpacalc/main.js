var app = new Vue({
    el: "#app",
    data: {
        // credits_earned: 0,
        // total_gpa: 0,
        courses: [{
            course_code: '',
            course_mark: 0,
            course_weight: 1/2
        }]
    },

    methods: {
        addNewRow: function () {
            this.courses.push({course_code: '', course_mark: 0, course_weight: 1/2});
        },

        deleteRow: function (index, course) {
            let idx = this.courses.indexOf(course);
            if (idx > -1) {
                this.courses.splice(idx, 1);
            }
        },

        compute_one_gpa: function (mark) {
            if (mark >= 85) {
                return 4.0;
            } else if (mark >= 80) {
                return 3.7;
            } else if (mark >= 77) {
                return 3.3;
            } else if (mark >= 73) {
                return 3.0;
            } else if (mark >= 70) {
                return 2.7;
            } else if (mark >= 67) {
                return 2.3;
            } else if (mark >= 63) {
                return 2.0;
            } else if (mark >= 60) {
                return 1.7;
            } else if (mark >= 57) {
                return 1.3;
            } else if (mark >= 53) {
                return 1.0;
            } else if (mark >= 50) {
                return 0.7;
            } else {
                return 0.0;
            }
        },

        total_credit: function () {
            let sum = 0.0;
            for (let i = 0; i < this.courses.length; i++) {
                sum += parseFloat(this.courses[i].course_weight);
            }
            return sum;
        }
    },
    computed: {
        credits_earned: function () {
            let sum = 0.0;
            for (let i = 0; i < this.courses.length; i++) {
                sum += parseFloat(this.courses[i].course_weight);
            }
            return sum;
        },
        total_gpa: function () {
            let sum = 0.0;
            for (let i = 0; i < this.courses.length; i++) {
                sum += this.courses[i].course_weight * this.compute_one_gpa(this.courses[i].course_mark);
            }
            return sum / this.total_credit();
        }
    }
});
