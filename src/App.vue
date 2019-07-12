<template>
  <div id="app">
    <div id="nav">

        <b-navbar toggleable="md">
          <b-navbar-brand href="#">S-one Demo App</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

    </div>
    <router-view/>
  </div>
</template>
