<template>

    <CardView>
        <template v-slot:cardHeader>

            <vue-countdown :disabled="counting" @click="startCountdown" :time="30 * 60 * 1000"
                           v-slot="{ days, hours, minutes, seconds, milliseconds }">
                زمان باقی مانده :
                {{ seconds }} : {{ minutes }} : {{ hours }}
            </vue-countdown>
        </template>
        <template v-slot:cardBody>
            <Quiz/>
        </template>

    </CardView>
</template>

<script>

    import QuestionBoxComponent from "../components/QuestionBoxComponent.vue";
    import Quiz from "../components/Quiz.vue";

    export default {
        name: "DoQuizView.vue",
        components: {Quiz, QuestionBoxComponent},
        className: 'btn-light',
        data() {
            return {
                counting: false,
                answer: false,
                disabled: false,
                questions: [
                    {
                        'title': 'این متن سوال اول است',
                        'description': 'این توضیحات سوال اول است',
                        'answers': [
                            {
                                'name': 'answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1answer 1',
                                'description': 'description 1',
                                'is_correct': 0,
                            },
                            {
                                'name': 'answer 2',
                                'description': 'description 2',
                                'is_correct': 0,
                            },
                            {
                                'name': 'answer 3',
                                'description': 'description 3',
                                'is_correct': 1,
                            },
                            {
                                'name': 'answer 4',
                                'description': 'description 4',
                                'is_correct': 0,
                            },

                        ],
                    },

                ]
            };
        },
        methods: {
            showAnswer: function (event) {
                this.answer = !this.answer
                this.disabled = !this.disabled

            },
            startCountdown: function () {
                this.counting = true;
            },
            onCountdownEnd: function () {
                this.counting = false;
            },
        },
    };
</script>

<style scoped>

</style>