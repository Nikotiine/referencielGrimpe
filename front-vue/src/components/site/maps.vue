<template>
  <div style="height: 75vh; width: 50vw">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="positionParking">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control-layers />
      <l-marker v-if="positionParking" :lat-lng="positionParking" draggable>
        <l-tooltip> Parking Site </l-tooltip>
      </l-marker>

      <l-marker v-if="positionCamion" :lat-lng="positionCamion" draggable>
        <l-tooltip> Parking Camion </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { latLng } from "leaflet";

import {
  LMap,
  // LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  // LPopup,
  //   LPolyline,
  //   LPolygon,
  //   LRectangle,
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    // LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    // LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
  },
  props: ["parking", "parkingCamion"],
  data() {
    return {
      zoom: 10,
      center: latLng(47.41322, -1.219482),

      url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
      positionParking: this.parking
        ? latLng(this.parking[1], this.parking[0])
        : null,
      positionCamion: this.parkingCamion
        ? latLng(this.parkingCamion[1], this.parkingCamion[0])
        : null,
    };
  },
  computed: {},
  methods: {},
};
</script>
