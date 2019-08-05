<template>
  <div class="home">
    <SignalCommunication></SignalCommunication>
  </div>
</template>

<script>
// @ is an alias to /src

import SignalCommunication from "./SignalCommunication"



export default {
  name: 'home',
  components: {
    SignalCommunication
  }
}
</script>
