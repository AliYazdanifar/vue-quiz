<script>
import HomeComponent from "../components/home/HomeComponent.vue";
export default{
  components:{HomeComponent}
}
</script>

<template>
  <main>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><h5 class="card-title">Welcome</h5></div>
          <div class="card-body">
            <h1 class="alert alert-success">test Alert</h1>

            <HomeComponent/>
          </div>
          <div class="card-footer">next</div>
        </div>
      </div>
    </div>
  </main>
</template>
