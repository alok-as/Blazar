<template>
    <div class="login">
        <transition name="visible">
            <div class="login__backdrop" v-show="showLogin"></div>
        </transition>
        <transition name="animate" type="animation">
            <div class="login__modal" v-show="showLogin">
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
        </transition>
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
    backface-visibility: hidden;
    &__backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: rgba(0,0,0,.8);
        transition: all 0.4s ease;
    }

    &__modal {
        background-color: $color-white;
        position: fixed;
        top: 28%;
        left: 32%;
        z-index: 1001;
        padding: 4rem 6rem;
        border-radius: 5px;
        transition: all 0.3s ease;
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

// Adding the Animations
// Backdrop Animations
.visible-enter {
    opacity: 0;
}
.visible-enter-active {
    transition: opacity .4s ease;
}
.visible-leave-active {
    transition: opacity 0.8s ease;
    opacity: 0;
}

// Modal Animations
.animate-enter-active {
    animation: animate-in 0.2s ease-in forwards;
}
.animate-leave-active {
    animation: animate-out 0.2s ease-out forwards;
}
</style>
