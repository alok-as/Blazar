<template>
    <div class="login">
        <div class="login__backdrop" v-show="showLogin"></div>
        <div class="login__modal" v-show="showLogin" :style="{top:scrollPosition + 180 + 'px'}">
            <span class="login__close" @click="closeLogin">&times;</span>
            <form class="login__form center">
                <h3 class="heading-2 mb-vsmall">Hey, welcome back!</h3>
                <input class="login__field" type="text" placeholder="Username or Email address *">
                <input class="login__field" type="password" placeholder="Password*">
                <div class="login__options">
                    <div class="login__remember">
                        <input type="checkbox" id="checkbox">
                        <label for="checkbox">Remember me</label>
                    </div>
                    <div class="login__forgot">Forgot your password?</div>
                </div>
                <login-button class="mt-small" :text="'Login'"></login-button>
            </form>
        </div>
    </div>
</template>

<script>
import button from '../UI/btn'
export default {
    components: {
        'login-button': button 
    },
    computed: {
        showLogin () {
            return this.$store.getters.showLogin
        },
        scrollPosition () {
            return this.$store.getters.getScrollPosition
        }
    },
    methods: {
        closeLogin () {
            this.$store.commit('closeLogin')
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    &__backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: rgba(0,0,0,.8);
        transition: all 0.5s;
    }

    &__modal {
        background-color: $color-white;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1001;
        padding: 4rem 6rem;
        border-radius: 5px;
    }

    &__close {
        position: absolute;
        top: 0;
        right: 1rem;
        font-size: 3rem;
        transition: all 0.4s ease;
        cursor: pointer;

        &:hover {
            color: $color-blue-light;
        }
    }

    &__field {
        display: block;
        width: 100%;
        background: none;
        outline: none;
        border: 1px solid $color-grey-light;
        border-radius: 100px;
        padding: 1.6rem;
        font-family: inherit;
        font-size: 1.4rem;        
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }

    &__options {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__remember {
        input {
            vertical-align: middle;
            margin-right: .6rem;
        }
        label {
            color: $color-grey-dark;
            font-size: 1.4rem;
        }
    }

    &__forgot{
        color: $color-blue-light;
        font-size: 1.4rem;
        cursor: pointer;
    }
}
</style>