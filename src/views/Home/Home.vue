<template>
  <div class="home">
    <p v-if="!isJustRestored && !isJustSaved">You have unsaved changes</p>
    <p v-if="!!savedDate">Saved Date: {{savedDate}}</p>
    <p v-if="!!restoredDate">Restored Date: {{restoredDate}}</p>
    <v-text-field
      v-model="numberOfSisters"
      type="number"
      label="Regular"
      required
    ></v-text-field>
    
    <div
      v-for="i in nameByNumber"
      :key="i">
      <p>{{'Some name '+i}}</p>
    <v-text-field
      v-model="sisters[i]"
      :label="'Some name '+i"
      required
    ></v-text-field>
    </div>

    <v-btn @click="clickMe1()">Save</v-btn>
    <v-btn @click="restoreData()">Restore</v-btn>
  </div>
</template>

<script src="./Home.js"></script>
<style scoped lang="css" src="./Home.css"></style>
