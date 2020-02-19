<template>
    <header class="header">
        <div class="header__content">
            <nav class="nav">
                <div class="nav__logo">Listing <sup>easy</sup></div>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Home</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Explore</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Pages</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Tips and Articles</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                </ul>
                <a href="#" class="nav__signup">Sign Up / Register</a>
            </nav>
            <div class="header__text">
                <h1 class="heading-1">Find the best place to be</h1>
                <h3 class="heading-3 header__heading-3">ListingEasy is the hassle-free way of discovering the city</h3>
                <form class="form">
                    <input type="text" list="category" class="form__control" placeholder="What are you looking for?">
                    <datalist id="category">
                        <option value="Beauty">Beauty</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Finances">Finances</option>
                        <option value="Health">Health</option>
                        <option value="Plant">Plant</option>
                    </datalist>

                    <input type="text" list="location" class="form__control" placeholder="Any Category">
                    <datalist id="location">
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </datalist>
                    <button class="btn">
                        Search
                        <svg>
                            <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
                        </svg>
                    </button>
                </form>
                <div class="header__tags">
                    <p>Popular:</p>
                    <p>Food &amp; Drink</p>
                    <p>Hotel &amp; Hostel</p>
                    <p>Outdoor</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header{
    background-image: url("../../assets/header-back.jpg");
    background-position: center;
    background-size: cover;
    grid-column: full-start / full-end;

    display: grid;
    grid-template-columns: [full-start] minmax(6rem,1fr) repeat(8,[col-start] minmax(min-content,14rem) [col-end]) minmax(6rem,1fr)[full-end];

    &__content{
        grid-column: col-start 1 / col-end 8;
        position: relative;
        height: 100%;
    }

    &__text{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &__heading-3{
        margin-top: -1rem;
    }

    &__tags{
        width: 50%;
        margin: 1.2rem auto;
        color: $color-white;
        font-size: 1.4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
        justify-items: center;
        grid-row-gap: 1rem;

        p{
            cursor: auto;
            &:hover{
                border-bottom: 1px solid white;
            }
        }

    }
}

.nav{
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-between;

    &__logo{
        font-weight: 600;
        font-size: 2.3rem;
        text-transform: uppercase;
        color: $color-white;
        display: flex;
        align-items: center;

        sup{
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.3rem;
            margin-top: -1rem;
            margin-left: .5rem;
        }

        &::before{
            content: "";
            display: inline-block;
            width: 3.5rem;
            height: 3.5rem;
            margin-right: .7rem;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/location.svg);
                    mask-image: url(../../assets/SVG/location.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }

    &__list{
        list-style: none;
    }
    &__item{
        display: inline-block;
        position: relative;

        &:not(:last-child){
            margin-right: 4rem;
        }

        &::after{
            content: "";
            display: inline-block;
            width: 2rem;
            height: 2rem;
            margin-left: .7rem;
            vertical-align: middle;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/chevron-small-down.svg);
                    mask-image: url(../../assets/SVG/chevron-small-down.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }

    &__item:hover &__link{
        color: $color-blue-light;
    }

    &__item:hover .dropdown{
        top: 3.5rem;
        opacity: 1;
    }

    &__link{
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-white;
            transition: all .3s;
        }
    }

    &__signup{
        display: flex;
        align-items: center;
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-white;
        }

        &::before{
            content: "";
            display: inline-block;
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
            vertical-align: middle;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/add-user.svg);
                    mask-image: url(../../assets/SVG/add-user.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }
}

.dropdown {
    display: block;
    position: absolute;
    top: 5rem;
    right: 0;
    width: 20rem;
    padding: 1.5rem 3rem;
    list-style: none;
    background-color: $color-white;
    border-radius: 1rem;
    opacity: 0;
    pointer-events: none;
    transition: all .3s;

    &__item{
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    &__link{
        text-decoration: none;
        color: #444;
    }
}

.form{
    background-color: $color-white;
    border-radius: 100px;
    width: 85%;
    margin: 3.5rem auto 0 auto;
    display: grid;
    padding: .3rem;
    padding-left: 3rem;
    grid-template-columns: 3fr 2fr 2fr;
    grid-gap: 1.5rem;

    &__control{
        background:none;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 1.6rem;
        &::-webkit-calendar-picker-indicator{
            display: none;
        }

        &::placeholder{
            color: #444;
        }
    }
}

</style>
