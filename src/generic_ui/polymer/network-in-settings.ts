/// <reference path='./context.d.ts' />
/// <reference path='../../../../third_party/polymer/polymer.d.ts' />

var ui = ui_context.ui;
var core = ui_context.core;
var model = ui_context.model;

Polymer({
  signedIn: false,
  networkInfo: null,
  updateSignedIn: function() {
    var network = model.getNetwork(this.name);
    this.signedIn = !!network;
    this.networkInfo = network ? network : null;
  },
  connect: function() {
    if (this.name == 'Quiver') {
      this.fire('core-signal', { name: 'open-quiver-login-dialog' });
      return;
    }
    ui.login(this.name).catch((e :Error) => {
      console.warn('Did not log in', e);
    });
  },
  logout: function() {
    if (!this.signedIn) {
      return;
    }

    ui.logout({
      name: this.name,
      userId: this.networkInfo.userId
    })
  },
  ready: function() {
    this.model = model;
    this.displayName = ui.getNetworkDisplayName(this.name);
  },
  observe: {
    'model.onlineNetworks': 'updateSignedIn'
  }
});
