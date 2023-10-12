<script setup>
    import {computed, ref} from 'vue'

    const questions = ref([
        {
            id: 1,
            title: 'سیستم عامل چیست؟',
            description: 'این سوال باید جوابش این شکلی باشد',
            answers: [
                {
                    id: 1,
                    name: 'یک جارو است',
                    description: 'جارو برقی',
                    is_correct: 0,
                },
                {
                    id: 2,
                    name: 'یک کامپیوتر است که در همه ی جهات خانه می تواند در اختیار کاربران قرار بگیرد.',
                    description: 'description2',
                    is_correct: 1,
                },
                {
                    id: 3,
                    name: 'nammmeee3',
                    description: 'description3',
                    is_correct: 0,
                },
                {
                    id: 4,
                    name: 'nammmeee4',
                    description: 'description4',
                    is_correct: 0,
                },

            ],
        },
        {
            id: 2,
            title: 'tit222222le',
            description: 'descri222222ption',
            answers: [
                {
                    id: 5,
                    name: 'nammm22222eee',
                    description: 'description',
                    is_correct: 0,
                },
                {
                    id: 6,
                    name: 'nammm2222222eee2',
                    description: 'description2',
                    is_correct: 1,
                },
                {
                    id: 7,
                    name: 'nam2222222mmeee3',
                    description: 'description3',
                    is_correct: 0,
                },
                {
                    id: 8,
                    name: 'nammm2222222eee4',
                    description: 'description4',
                    is_correct: 0,
                },

            ],
        },
        {
            id: 3,
            title: 'tit222222le',
            description: 'descri22333333333333332222ption',
            answers: [
                {
                    id: 9,
                    name: 'nammm23333333332eee',
                    description: 'description',
                    is_correct: 0,
                },
                {
                    id: 10,
                    name: 'nammm222333333333332222eee2',
                    description: 'description2',
                    is_correct: 0,
                },
                {
                    id: 11,
                    name: 'nam222333333333332222mmeee3',
                    description: 'description3',
                    is_correct: 0,
                },
                {
                    id: 12,
                    name: 'nammm22233333333332222eee4',
                    description: 'description4',
                    is_correct: 1,
                },

            ],
        },

    ])

    const quizCompleted = ref(false)
    const currentQuestion = ref(0)
    const selected = ref(false)

    const score = ref(0);
    const correctAnswers = ref([])

    const getCurrentQuestion = computed(() => {
        let question = questions.value[currentQuestion.value]
        question.index = currentQuestion.value

        return question
    })

    const getSelected = computed(() => {
        return selected.value
    })

    const SetAnswer = (e, selectedAnswer) => {
        selected.value = true;
        console.log(selectedAnswer.id)
        if (selectedAnswer.is_correct) {
            score.value++
        }

        e.target.value = null
    }

    const nextQuestion = () => {
        selected.value = false;
        if (currentQuestion.value < questions.value.length - 1) {
            currentQuestion.value++
            return
        }

        quizCompleted.value = true
    }
    const previousQuestion = (question) => {
        selected.value = false;
        if (currentQuestion.value > 0) {
            currentQuestion.value--
        }
        console.log(question.id)

        if (correctAnswers.value[correctAnswers.length] === question.id) {
            correctAnswers.value.pop()
            score.value--

        }


        quizCompleted.value = false


    }


</script>

<template>
    <div id="quiz-app">
        <section class="quiz" v-if="!quizCompleted">
            <div class="quiz-info">
                <span class="question">{{ getCurrentQuestion.title }}</span>
                <span class="score">Score {{ score }}/{{ questions.length }}</span>
            </div>

            <div class="options">
                <label
                        v-for="(option, index) in getCurrentQuestion.answers"
                        :for="'option' + index"
                        :class="`option ${
                        getSelected === true ?
						    option.is_correct === 1
						    		? 'correct'
						    		: 'wrong'
						:''

					} ${
						getSelected === true?
						    option.is_correct !== 1 ?
							'disabled'
							: ''
						:''
					}`">
                    <input
                            type="radio"
                            :id="'option' + index"
                            :name="getCurrentQuestion.index"
                            :value="index"
                            v-model="getSelected"
                            :disabled="getSelected"
                            @change="SetAnswer($event,option)"
                    />

                    <span>{{ option.name }}</span>
                </label>
            </div>

            <p v-if="getSelected === true" class="alert alert-warning m-2">{{ getCurrentQuestion.description }}</p>
            <hr/>
            <div class="p-2">
                <button
                        class="mx-2"
                        id="btn-next"
                        @click="nextQuestion"
                        :disabled="!getSelected">
                    {{
                    getCurrentQuestion.index === questions.length - 1
                    ? 'Finish'
                    : getSelected === false ? 'یک گزینه را انتخاب کنید' : 'Next question'
                    }}
                </button>

            </div>
        </section>

        <section v-else>
            <h2>You have finished the quiz!</h2>
            <p>Your score is {{ score }}/{{ questions.length }}</p>
            <button @click="this.$router.go(0)">refresh</button>
        </section>
    </div>
</template>

<style scoped>

    #quiz-app {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .quiz {
        padding: 1rem;
        width: 100%;
        max-width: 840px;
    }

    .quiz-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .quiz-info .question {
        font-size: 1.25rem;
    }

    .quiz-info.score {
        font-size: 1.25rem;
    }

    .options {
        margin-bottom: 1rem;
    }

    .option {
        padding: 1rem;
        display: block;
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .option:hover {
        background-color: rgba(48, 127, 197, 0.73);
    }

    .option.correct {
        background-color: #2cce7d;
        color: #000000
    }

    .option.wrong {
        background-color: #ff5a5f;
    }

    .option:last-of-type {
        margin-bottom: 0;
    }

    .option.disabled {
        opacity: 0.5;
    }

    .option input {
        display: none;
    }

    #btn-next {
        appearance: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        background-color: #2cce7d;
        color: #2d213f;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-radius: 0.5rem;
    }

    #btn-prev {
        appearance: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        background-color: #2ca3ce;
        color: #2d213f;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-radius: 0.5rem;
    }

    button:disabled {
        opacity: 0.5;
    }

</style>
