<template>
        <div
        v-if="data.challenges && data.challenges.length"
        class="challenge-summary"
        >
            <div
                v-for="(challenge, index) in data.challenges"
                :key="index"
                class="challenge"
                @click="$router.push(challenge.link)"
            >
                <div>
                    <img :src="$withBase(challenge.image)" height="150" width="350" class="no-zoom">
                </div>
                <h3>{{ challenge.title }}</h3>
                <p>{{ challenge.description }}</p>
            </div>
        </div>
</template>

<script>
export default {
    computed: {
        data () {
            return this.$page.frontmatter
        }
    }
}
</script>

<style scoped>
.challenge-summary{
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    margin: 16px auto;
}

.challenge {
    background-color: #EEE;
    padding: 8px;
    box-shadow: 5px 5px 10px #F6F6F6;
    cursor: pointer;
    transition: transform 200ms;
}

.challenge:hover {
    transform: scale(1.05);
}

.challenge img {
    object-fit: cover;
}
</style>
