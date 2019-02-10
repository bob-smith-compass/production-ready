<template>
<div>

    <h1>Welcome to {message}</h1>

    <input class="button newsletter-button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
    <input class="button newsletter-button" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">

</div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Vue'
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: yellowgreen;
    color: red;
}

#news .newsletter-input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 80px 10px 20px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 16px;
}
#news .newsletter-button.button {
  position: absolute;
  padding: 4px 20px;
  margin: 0;
  height: calc(100% - 8px);
  right: 4px;
  top: 4px;
}
</style>

