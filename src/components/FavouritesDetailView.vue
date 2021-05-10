<template>
  <div class="detail-view">
    <div class="stt-info" v-if="selectedStation">
      <button id="back-btn" @click="goBack">Back</button>
      <!-- getting informations needed from JSON file -->
      <div id="stt-name">{{ selectedStation.name }}</div>
      <div id="stt-address">{{ selectedStation.address }}</div>
      <div id="stt-status">{{ selectedStation.status }}</div>
      <div class="stand-info">
        <div id="available-bikes">
          <p>Bikes Available</p>
          {{ selectedStation.available_bikes }}
        </div>
        <div id="available-stands">
          <p>Stands Available</p>
          {{ selectedStation.available_bike_stands }}
        </div>
        <div id="bike-stands">
          <p>Total Stands</p>
          {{ selectedStation.bike_stands }}
        </div>
      </div>
      <!-- creating favourtie/remove button, when clicked add to favourite or remove to favourite -->
      <button id="fav-btn" v-if="!isFavourite" @click="addToFavourites">
        Favourites
      </button>
      <button id="remove-btn" v-if="isFavourite" @click="removeFromFavourites">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let isFavourite = false;
    let favouriteStations = localStorage.getItem("favouriteStations");

    if (favouriteStations) {
      favouriteStations = JSON.parse(favouriteStations);
      const favouriteFound = favouriteStations.find(
        (fs) => fs.number === this.selectedStation.number
      );
      isFavourite = !!favouriteFound;
    }

    return {
      isFavourite,
    };
  },

  props: {
    selectedStation: {
      type: Object,
    },
  },

  methods: {
    //when button favourites is clickd add to favourites
    addToFavourites() {
      //check if it is in local storage, if not it will be an empty array
      let favouriteStations = localStorage.getItem("favouriteStations") || `[]`;
      //do a parse
      favouriteStations = JSON.parse(favouriteStations);
      //push
      favouriteStations.push(this.selectedStation);

      //add to local storage
      localStorage.setItem(
        "favouriteStations",
        //stringify: transform any javascript object notetion in String
        JSON.stringify(favouriteStations)
      );
      this.isFavourite = true;
    },

    // when the station is already in favourite list, the remove button appears and remove from favourites
    removeFromFavourites() {
      //check if it is in local storage, if not it will be an empty array
      let favouriteStations = localStorage.getItem("favouriteStations") || `[]`;
      //do a parse
      favouriteStations = JSON.parse(favouriteStations);
      //find the index to delete
      const index = favouriteStations.findIndex(
        (fs) => fs.number === this.selectedStation.number
      );
      favouriteStations.splice(index, 1);
      //remove from the local storage
      localStorage.setItem(
        "favouriteStations",
        JSON.stringify(favouriteStations)
      );

      this.isFavourite = false;
    },

    goBack() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.detail-view {
  position: relative;
  z-index: 1;
}

.stt-info {
  text-align: left;
  padding: 16px 24px 16px;
}

#stt-name {
  font-size: 27px;
  padding: 5px 0 5px 0;
}

#stt-address {
  font-size: 18px;
  padding: 0 0 5px;
}

#stt-status {
  font-size: 20px;
  text-align: left;
  top: 16px;
  right: 24px;
  padding: 0 0 5px;
}

#available-bikes {
  margin: 10px 24px;
  text-align: center;
}

#available-stands {
  margin: 10px 24px;
  text-align: center;
}

#bike-stands {
  margin: 10px 24px;
  text-align: center;
}

.stand-info {
  display: flex;
  flex-direction: row;
  padding: 0 24px 0 24px;
  border-style: solid;
  border-radius: 7px;
  border-color: lightgray;
}

#fav-btn {
  border: none;
  border-radius: 4px;
  flex: 1;
  padding: 1rem 2rem;
  background-color: #5ab5f2;
  width: 100%;
  font-size: inherit;
  margin-top: 13px;
}

#remove-btn {
  border: none;
  border-radius: 4px;
  flex: 1;
  padding: 1rem 2rem;
  width: 100%;
  font-size: inherit;
  margin-top: 13px;
  background-color: #f2625d;
}

#back-btn {
  border-style: double;
  border-radius: 4px;
  border-color: #5ab5f2;
  flex: 1;
  padding: 10px 20px;
  background-color: lightgray;
  margin-left: 79%;
  position: absolute;
}
</style>