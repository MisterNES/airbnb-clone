'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Places', [
        {
          title: 'Mos Eisley Cantina', city: 'Mos Eisley', state:'Great Mesra Plateau', imageUrl: 'https://starwarsblog.starwars.com/wp-content/uploads/2015/01/E4S_KEY_21.jpg',
          description: 'Perfect music venue. Ideal location for bounty hunter conventions. Discreet. Don\'t ask don\'t tell. No droids!'
        },
        {
          title: 'Milliways: The Restaurant at the End of the Universe', city: 'End of the Universe', state: '???', imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1532522430i/26026311._SX540_.jpg',
          description: 'Entertain your guests with what is quite literally the ultimate show! Warning: Guests with certain prophetic beliefs may be severely disappointed.'
        },
        {
          title: 'Gasworks', city: 'Aurora', state: 'Illinois', imageUrl: 'https://1.bp.blogspot.com/-aIrCOpeLpX8/Tf7V10vbQ3I/AAAAAAAAEkM/lKbqW3Qxsn0/s1600/Gas.JPG',
          description: 'An excellent heavy metal bar. It’s always a babefest and we got a pool table, too.'
        }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Places');
  }
};
