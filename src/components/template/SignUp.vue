<template>
    <section class="forms_body">
        <form class="lg-shadow form-signup">
            <p class="p-5">Sign Up</p>
            <figure class="fig-1">
                <img src="./../../assets/forms-login.svg" alt="">
            </figure>
            <input type="text" class="fig-1_input" placeholder="Username">
            
            <figure class="fig-2">
                <img src="./../../assets/forms-mail.svg" alt="">
            </figure>
            <input type="text" class="fig-2_input" placeholder="email">

            <figure class="fig-3">
                <img src="./../../assets/forms-lock.svg" alt="">
            </figure>
            <input type="text" class="fig-3_input" placeholder="password">

            <figure class="fig-5">
                <img src="./../../assets/forms-confirm.svg" alt="">
            </figure>
            <input type="text" class="fig-5_input" placeholder="confirm password">

            <span class="form_btn">
                <router-link to="/login">
                    Sign Up
                </router-link>
            </span>
            <p class="form-text">Already Have an account? <span> <a href="login.html">Log in</a></span></p>
        </form>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

</style>