<template>
    <v-row>
      <v-col cols="3" sm="3" v-for="(feature, i) in featured" :key="i">
        <v-card class="mx-auto my-12 pb-4" max-width="374">
          <v-img height="250" class="mx-4" :src="feature.img"></v-img>
  
          <v-card-item class="mt-n4">
            <v-card-title class="text-center">{{ feature.title }}</v-card-title>
          </v-card-item>
  
          <v-card-text>
            <div class="text-center">
              {{ feature.bio }}
            </div>
            <v-row align="center" class="mx-0 mt-2">
              <v-spacer></v-spacer>
              <div class="text-grey ms-4">{{ feature.price }}</div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>
  
<script>
export default {
    data: () => ({
      featured: [
        {
          img: "image/pelikan_marker_x4.png",
          title: "Pelikan Marker",
          price: "$ 25.000",
          bio: "Permanent marker 711 ",
        },
        {
          img: "image/pelikan_pen_black.png",
          title: "Pelikan Black Pen",
          price: "$ 25.000",
          bio: "Ballpoint pen with grip",
        },
        {
          img: "image/spiral_homework_notebook.png",
          title: "Potosí Spiral Notebook",
          price: "$ 25.000",
          bio: "Striped leaves",
        },
        {
          img: "image/mapped_black_pencil.png",
          title: "Mapped black pencil",
          price: "$ 25.000",
          bio: "12 pencil black HB=2",
        },
      ],
    }),
  };
</script>
  
<style>
</style>