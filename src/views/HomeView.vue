<template>
    <CardView>
        <template v-slot:cardHeader>
            <h4 class="card-title">سیستم کوئیز آنلاین</h4>
        </template>
        <template v-slot:cardBody>

            <p>
                با استفاده از این سسیستم میتوانید یک آزمون شبیه سازی را در اختیار
                داوطلبان قرار دهید تا به بهترین شکل بتوانند آماده ی پاسخگویی به تمام
                سوالات کنکور و یا دیگر آزمون ها شوند.
            </p>
            <p>
                همچنین می توانید با اشتراک این اپلیکیشن با دوستانتان به ما دلگرمی دهید
            </p>

        </template>

        <template v-slot:cardFooter>
            <router-link to="intro" class="btn btn-primary">بزن بریم!</router-link>
        </template>
    </CardView>
</template>

<script>
    export default {};
</script>
