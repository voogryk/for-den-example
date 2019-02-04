// @ is an alias to /src
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'home',

  data() {
    return  {
        numberOfSisters: '',
        show1: false,
        show2: true,
        show3: false,
        sisters: [],
        isJustRestored: false,
        isJustSaved: false,
        savedDate: undefined,
        restoreDate: undefined 
    }
  },

  computed: {
    nameByNumber() {
        return parseInt(this.numberOfSisters) || 0;
    }
  },

  watch: {
      sisters() {
          this.isJustRestored = false
          this.isJustSaved = false
      },
      numberOfSisters() {
        this.isJustRestored = false
        this.isJustSaved = false
      }
  },

  methods: {
      clickMe1() {

        let objToSave = {};
        setTimeout(() => {
            this.isJustSaved = true;
        }, 0);
        this.savedDate = new Date();

        objToSave.numberOfSisters = this.numberOfSisters;
        objToSave.sisters = this.sisters;

        objToSave.savedDate = new Date();

        localStorage.setItem('savedData', JSON.stringify(objToSave));
        console.log(JSON.stringify(objToSave));

      },

      restoreData() {
        setTimeout(() => {
            this.isJustRestored = true;
        }, 0);
        this.restoreDate = new Date();
        let savedObj = localStorage.getItem('savedData');
        if (!savedObj) return;
        savedObj = JSON.parse(savedObj);
        this.numberOfSisters = savedObj.numberOfSisters || 0;  
        this.sisters = savedObj.sisters || [];
        this.savedDate = savedObj.savedDate;
      }
  },

  components: {
    HelloWorld
  }
}