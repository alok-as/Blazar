<template>
    <div class="login">
        <div class="login__content">
            <form class="login__form">
                <div class="login__close" @click="closeLogin">&times;</div>
                <h4 class="heading-2 mb-vsmall">Hey, welcome back!</h4>
                <input class="login__control" type="text" placeholder="Username or Email address*">
                <input class="login__control" type="text" placeholder="Password*">
                <div class="login__help mt-small">
                    <div class="login__remember">
                        <input class="login__checkbox" type="checkbox" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <span class="login__lost">Lost your password?</span>
                </div>
                <button class="btn">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['closeLogin'])
  }
}
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: rgba($color: #000000, $alpha: 0.6);
    position: fixed;
    transition: all .2s;

    &__content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__close{
        position: absolute;
        top: 0;
        right: 1.3rem;
        font-size: 3rem;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            color: $color-blue-light;
        }
    }

    &__form{
        padding: 4rem 6rem;
        background-color: $color-white;
        display: inline-block;
        border-radius: .8rem;
        opacity: 0;
        transform: translateY(-220%);
        transition: all .4s ease-in .5s;
        animation: pop-in 1s 1 .4s cubic-bezier(.3,.99,1,1) forwards;
    }

    &__control{
        background-color: none;
        border: 1px solid $color-grey-light;
        font-family: inherit;
        font-size: 1.4rem;
        padding: 1.5rem;
        padding-left: 2rem;
        border-radius: 100px;
        display: block;
        width: 100%;
        outline: none;
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }

    &__help{
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
    }

    &__checkbox{
        vertical-align: middle;
        margin-right: .5rem;
    }

    &__lost{
        color:$color-blue-light;
        cursor: pointer;
        transition: all .3s;

        &:hover{
            color: $color-grey-light;
        }
    }
}

.btn{
    margin: 2rem auto 0 auto;
}

.pop-up-enter{
    opacity: 0;
    transform: translateY(-220%);
}
.pop-up-active{
    animation: popin 1s 1 .4s ease-in forwards;
}

.pop-up-leave-active{
    animation: popout 1s 1 .4s ease-out forwards;
}
</style>
