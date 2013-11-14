var icon = './mods/gdt-modAPI/examples/img/BM.png';
GDT.addPlatform({
	id : 'BM Disk',
	name : 'BM Disk',
	company : 'Billy Milligan',
	startAmount : 0.20,
	unitsSold : 0.987,
	licencePrize : 3500000,
	published : '40/9/3',
	platformRetireDate : '44/6/2',
	developmentCosts : 100000,
	genreWeightings : [1, 1, 1, 1, 1, 1],
	audienceWeightings : [1, 1, 1],
	techLevel : 7,
	iconUri : icon,
	events : [{
			id : 'BM-1',
			date : '40/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "A new console be released!It's Billi Milligan Disk - a new tecgonoly is used.Very mobile and beatiful product!Market will be just expolded by this!{0}.".localize().format(General.getETADescription('40/2/1', '40/9/3')),
					image : icon
				});
			}
		}
	]
});
