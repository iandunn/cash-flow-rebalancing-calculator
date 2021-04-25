# MVP

- [x] Sketch out static markup for parity with spreadsheet
- [ ] In-app instructions/docs
- [ ] Get GitHub Page working - maybe convert to HTM instead of dealing w/ build tools
- [x] Basic README
- [x] Render components from example data
- [ ] Allow changing userdata


# Future - High Impact

* add textarea for adding notes to each account
* export/import JSON to save permenantly
* what else is in spreadsheet that want to replicate?
* link fund symbols to a page on fidelity.com or somewhere with data about them
* add display order for each tag, rather than sorting alphabetically. want to compare domestic vs intl side-by-side
* calculate things automatically rather than making the user do it, ala http://optimalrebalancing.tk 
* setup github action to automatically rebuild GH Pages branch - probably existing one you can use instead of writing from scratch - or convert to HTM so don't have to deal w/ build tool crap in the first place
* make it easy to setup accounts+funds for first time just by copy/pasting from fidelity/vanguard/etc
	* also make it easy to _update_ them that way

# Future - Low Impact

* ability to have account allocation for tag that isn't assigned to any funds currently
* make calculations more sophisticated, ala http://optimalrebalancing.tk/explanation.html ?
* add a button to reset & delete everything - but confirm() first. dont want to have to manually delete all the example data the first time. if that's the only use case, though, then maybe set it up differently, like placeholders? still want the example data to be there to play with though
* link to some educational info about rebalancing
* post it on Bogleheads etc to promote it?
* show pie charts for allocations, but maybe that's just fluff?
* add react errorboundry to catch fatals
* make drift user-configurable
