// TODO Make this a read-only version. Right now, this is just a copy of the Editable version

define([
    "use!backbone", 
    "use!handlebars", 
    "text!datum/datum_tag_read_embedded.handlebars",
    "datum/DatumTag",
    "libs/Utils"
], function(Backbone,
    Handlebars, 
    datumTagTemplate, 
    DatumTag
) {
  var DatumTagReadView = Backbone.View.extend(
  /** @lends DatumTagReadView.prototype */
  {
    /**
     * @class Datum Tags
     *
     * @extends Backbone.View
     * @constructs
     */
    initialize : function() {
      Utils.debug("DATUM TAG EDIT VIEW init");
    },

    /**
     * The underlying model of the DatumTagEditView is a DatumTag.
     */
    model : DatumTag,
    
    /**
     * Events that the DatumTagEditView is listening to and their handlers.
     */
    events : {
      "blur .datum_tag" : "updateTag"
    },

    /**
     * The Handlebars template rendered as the DatumTagEditView.
     */
    template: Handlebars.compile(datumTagTemplate),
    	
    /**
     * Renders the DatumTagEditView.
     */
    render : function() {
      Utils.debug("DATUM TAG EDIT VIEW render");
      
      $(this.el).html(this.template(this.model.toJSON()));
      
      return this;
    },
    
    /**
     * Change the model's state.
     */
    updateTag : function() {
      this.model.set("tag", this.$el.children(".datum_tag").val());
    }
  });

  return DatumTagReadView;
}); 