// Define the audio object
var audio = {
    init: function() {
        var self = this;
        
        document.addEventListener('DOMContentLoaded', function() {
            self.components.media();
        });
    },

    // Components object to hold reusable methods
    components: {
        media: function(target) {
            var container;
            if (target !== undefined) {
                container = document.querySelector(target);
            } else {
                container = document.body;
            }

            var mediaElements = container.querySelectorAll('audio.fc-media');
            
            if (mediaElements.length > 0) {
                mediaElements.forEach(function(media) {
                    new MediaElementPlayer(media, {
                        audioHeight: 10, // Set the height of the audio player
                        features: [
                            'playpause', 
                            'current', 
                            'duration', 
                            'progress', 
                            'volume', 
                            'tracks', 
                            'fullscreen'
                        ],
                        alwaysShowControls: true, 
                        timeAndDurationSeparator: '<span></span>', 
                        iPadUseNativeControls: true, 
                        iPhoneUseNativeControls: true, 
                        AndroidUseNativeControls: true 
                    });
                });
            } else {
                console.log("No audio elements found with the 'fc-media' class.");
            }
        }
    }
};

audio.init();
