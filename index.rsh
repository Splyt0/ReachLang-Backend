'reach 0.1';

export const main = Reach.App(() => {
    //This contract only keeps track of all the groups
    const Announcer = Participant('Announcer', {
        ready: Fun([], Null),
      });

      const Publisher = API('Publisher', {
        publish: Fun([Contract], Null),
      });

      //Polling function - hear: Need to call it only once
      const Listener = ParticipantClass('Listener', {
        hear: Fun([Contract], Null),
      });

      init();

      Announcer.publish();
      Announcer.interact.ready();

      var [] = [];
      invariant(balance() == 0);

      while(true) {
        commit();

        const [[contractAddress], notify] = call(Publisher.publish).throwTimeout(false);
        notify(null);
        
        Listener.interact.hear(contractAddress);

        continue;
    
    }

    commit();

    //Will never happen
    exit();

});