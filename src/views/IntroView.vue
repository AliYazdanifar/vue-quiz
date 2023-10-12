<template>
    <CardView>
        <template v-slot:cardHeader>
            <h6>مقدمه و تنظیمات آزمون</h6>
        </template>

        <template v-slot:cardBody>
            <div class="d-flex flex-md-row flex-column justify-content-around lh-lg">
                <div>
                    <label for="quiz_id">انتخاب آزمون</label>
                    <select id="quiz_id" class="form-select" name="quiz_id">
                        <option value="1">سیستم عامل</option>
                        <option value="2">شبکه</option>
                        <option value="3">پایگاه داده ها</option>
                        <option value="4">مهندسی نرم افزار</option>
                    </select>
                </div>
                <div>
                    <label for="time">زمان آزمون</label>
                    <input type="number" id="time" class="form-control" name="time"/>
                </div>

                <div>
                    <label for="count">تعداد سوالات</label>
                    <input type="number" id="count" class="form-control" name="time"/>
                </div>

            </div>
        </template>

        <template v-slot:cardFooter>
            <router-link to="/do_quiz" class="btn btn-primary">شروع</router-link>
            <button class="btn btn-secondary mx-2" @click="this.$router.go(-1)">بازگشت</button>
        </template>

    </CardView>
</template>

<script>
    export default {
        methods: {
            saveSettings() {
                return true;
            },
        },
    };
</script>


<style>
</style>