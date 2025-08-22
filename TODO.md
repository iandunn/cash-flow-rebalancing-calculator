# MVP

- [x] Sketch out static markup for parity with spreadsheet
- [x] Basic README
- [x] Render components from example data

- [ ] Allow changing inputs, adding funds/accounts
	- [ ] setup state.accounts.test value, and assign it to one input field. get that working so you know the data structure isn't the problem
    - [ ] change data structure so have direct access to account via id?
            same for funds and target allocations?
            ok to use the name as the id, or does that complicate when renaming?
	- [ ] account allocation target
	- [ ] portfolio allocation target
	- [ ] cash
	- [ ] fund amount
	- [ ] fund name
	        use `userEditable` b/c don't want to look like form input?
			or have to do form for onUpdate, and just use css to style like h3?
	- [ ] account name
	- [ ] add tags
	- [ ] delete tags
	- [ ] add fund
	- [ ] delete fund
	- [ ] add account
	- [ ] delete account
	- [ ]

	- [ ] set ui from state
	- [ ] update state when ui changes

- [ ] Save any changed data to indexdb.
    it fits this better than web storage b/c can store objects and doensn't block dom rendering
	well, json.stringify/parse would be simpler than the indexdb complexity, and would be performant for a small app like this
	that may be the more appropriate choice

- [ ] Add button to reset all data - user will want to clear example data when first start entering real data, but also useful if wanna start over
- [ ] Add in-app instructions/docs
- [ ] Get GitHub Page working - maybe convert to HTM instead of dealing w/ build tools. Still want HMR as addon, though.
- [ ] clean up todo comments in code, move to this file if not a quick thing to do.


# Future - High Impact

* add textarea for adding notes to each account
* export/import JSON to save permenantly
* what else is in spreadsheet that want to replicate?
* add display order for each tag, rather than sorting alphabetically. want to compare domestic vs intl side-by-side
* calculate things automatically rather than making the user do it, ala http://optimalrebalancing.tk
    * see `lazy-optimal.js` as reference
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
* make `DRIFT_THRESHOLD` user-configurable
