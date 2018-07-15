/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite named 'RSS Feeds'   */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* this test will loop through each feed in the allFeeds object,
        * and will ensure it has a URL property is defined as well as
         * make sure the URL property is not empty
         */
         it('allFeeds URL property is not empty', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
         }});
        /* this test will loop through each feed in the allFeeds
        * object and confirm a name property as well as
        * make sure the name property is not empty
         */
         it('allFeeds name property is not empty', function() {
             for (var y = 0; y < allFeeds.length; y++) {
                 expect(allFeeds[y].url).toBeDefined();
                 expect(allFeeds[y].url.length).not.toBe(0);
         }});
    });
    /* this is a new test suite named 'The menu' */
    describe('The menu', function() {
        /* this test will make sure the menu element is hidden
        * from view by default
        */
         it('menu is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toEqual(true);
         });
         /* this test ensures the menu changes visibility when
          * the menu icon is clicked (does the menu display when
          * clicked and does it hide when clicked again)
          */
          it('menu is shown/hidden when hamburger menu clicked', function() {
             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(false);
             $('.menu-icon-link').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });
    /* this is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* this test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single entry element within the feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('ensures loadFeed function is run & there is at least a single entry within feed container', function() {
            expect($('.feed .entry')).toBeDefined();
        });
    });
    /* this is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* this is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
         var entriesStart,
             entriesEnd;
         beforeEach(function(done) {
            loadFeed(0, function() {
                entriesStart = $('.feed').text();
                loadFeed(1, function() {
                    entriesEnd = $('.feed').text();
                    done();
                });
            });
        });
         it('ensure new feed is loaded and content changes', function() {
             expect(entriesStart).not.toBe(entriesEnd);
         });
    });
}());
