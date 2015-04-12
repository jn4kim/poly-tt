angular.module('polyu-scheduler.controllers', [])

.controller('LoginCtrl', function($scope , $sce, $timeout, $location) {
	var LOGIN = "LOGIN";
	var LOGGING_IN = "<i class='fa fa-circle-o-notch fa-spin'></i> LOGGING IN"
	var INVALID_ACCONT = "<span style='color: red'>Invalid Account</span>"
	$scope.logging = false
	$scope.login_status =  $sce.trustAsHtml(LOGIN);
	$scope.login_failed = false
	$scope.status_message = "Use your eStudent ID to check your schedule"


	// SKIP THE LOGIN * TO BE DELETED LATER
$location.path('/tab/timetable')

	$scope.login = function(){


		if(!$scope.logging){
			$scope.login_status =  $sce.trustAsHtml(LOGGING_IN);
			$scope.logging = true

			$timeout(function() {
				if($scope.username == "test" && $scope.password =="test"){
					console.log("IT WORKED")
					$location.path('/tab/timetable')
				}else{
					$scope.status_message = $sce.trustAsHtml(INVALID_ACCONT);
					$scope.username = ""
					$scope.password = ""
				}
				$scope.logging = false;
				$scope.login_status = LOGIN;
			}, 3000); 
		}
	}
})

.controller('MainCtrl', function($scope, $ionicHistory){
	$ionicHistory.clearHistory()

})

.controller('HomeCtrl', function($scope, $ionicHistory){
	$ionicHistory.clearHistory()

})



.controller('TableCtrl', function($scope, $ionicModal, $timeout, $window, $ionicHistory, $ionicPopover, $ionicSlideBoxDelegate){
	$ionicHistory.clearHistory()

	$scope.h = $window.innerHeight - 100;
    $scope.w = $window.innerWidth - 100;

	document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');

    $scope.setDay = function(){
    
    	$timeout(function() {

    		var d = new Date();
    		var n = d.getDay();

    		console.log(n);
    		if(n>0 && n<7){
    			$ionicSlideBoxDelegate.slide(n-1)
    		}
    		
    	}, 1); 

    	$scope.slideChanged = function(index) {
    		$scope.slideIndex = index;
    		$scope.current_day = $scope.days[index]
    		$scope.current_daycode = $scope.day_code[index]
    	}

    }




    $scope.days = [ "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" ]
    $scope.day_code = ["Mon", "Tue", "Wed", "Thu", "Fri"]
    $scope.current_day = "MONDAY"
    $scope.current_daycode = "Mon"

    $scope.mon_courses = [
    {
    	"course_code":"COMP2322",
    	"course_name":"COMPUTER NETWORKING",
    	"type":"LAB002",
    	"day":"Mon",
    	"start":"8:30",
    	"end":"9:20",
    	"venue":"PQ604B",
    	"staff":"Xiao Bin",
    	"color":"#F44336"
    },
    {
    	"course_code":"COMP2422",
    	"course_name":"VISUAL INTERFACE",
    	"type":"LEC001",
    	"day":"Mon",
    	"start":"9:30",
    	"end":"11:20",
    	"venue":"TU107 ",
    	"staff":"Cheung King Hong",
    	"color":"#009688"
    },
    {
    	"course_code":"COMP2432",
    	"course_name":"OPERATING SYSTEMS",
    	"type":"LAB002",
    	"day":"Mon",
    	"start":"11:30",
    	"end":"12:20",
    	"venue":"PQ604B",
    	"staff":"Mak Alvin",
    	"color":"#2196F3"
    },
    {
    	"course_code":"COMP3422",
    	"course_name":"CREATIVE DIGITAL ",
    	"type":"LEC001",
    	"day":"Mon",
    	"start":"14:30",
    	"end":"16:20",
    	"venue":"PQ306",
    	"staff":"Ngai Grace",
    	"color":"#E91E63"
    },
    {
    	"course_code":"COMP2411",
    	"course_name":"DATABASE SYSTEMS",
    	"type":"LEC001",
    	"day":"Tue",
    	"start":"8:30",
    	"end":"11:20",
    	"venue":"TU103",
    	"staff":"Ng Vincent To Yee",
    	"color":"#FF9800"
    },
    {
    	"course_code":"COMP2411",
    	"course_name":"DATABASE SYSTEMS",
    	"type":"LAB001",
    	"day":"Tue",
    	"start":"13:30",
    	"end":"14:20",
    	"venue":"PQ604A",
    	"staff":"Chiu Wai Han Memory",
    	"color":"#FF9800"
    },
    {
    	"course_code":"COMP3422",
    	"course_name":"CREATIVE DIGITAL",
    	"type":"TUT001",
    	"day":"Tue",
    	"start":"15:30",
    	"end":"16:20",
    	"venue":"QT402",
    	"staff":"Ngai Grace",
    	"color":"#E91E63"
    },
    {
    	"course_code":"HTM1C06",
    	"course_name":"THE EVOLUTION OF WORLD CUISINE",
    	"type":"LEC001",
    	"day":"Wed",
    	"start":"9:30",
    	"end":"12:20",
    	"venue":"PQ303",
    	"staff":"Martin Bugler",
    	"color":"#33691E"
    },
    {
    	"course_code":"COMP2422",
    	"course_name":"VISUAL INTERFACE  ",
    	"type":"TUT001",
    	"day":"Thu",
    	"start":"15:30",
    	"end":"16:20",
    	"venue":"QR514",
    	"staff":"Cheung King Hong",
    	"color":"#009688"
    },
    {
    	"course_code":"COMP2432",
    	"course_name":"OPERATING SYSTEMS",
    	"type":"LEC001",
    	"day":"Fri",
    	"start":"8:30",
    	"end":"11:20",
    	"venue":"Y304",
    	"staff":"Leong Hong Va",
    	"color":"#2196F3"
    },
    {
    	"course_code":"COMP2322",
    	"course_name":"COMPUTER NETWORKING",
    	"type":"LEC001",
    	"day":"Fri",
    	"start":"12:30",
    	"end":"15:20",
    	"venue":"TU103",
    	"staff":"Xiao Bin",
    	"color":"#F44336"
    }
    ];


	$ionicPopover.fromTemplateUrl('templates/popover-timetable.html', {
		scope: $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});

	$scope.setMode = function(mode) {
		$scope.popover.hide();
		$scope.mode = mode;
	};

	$scope.mode = true;
	$scope.viewModel = { showChooseHardware: false };


	/* MODAL */
	$ionicModal.fromTemplateUrl('templates/modal-subject.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal
	})

	
    $scope.selected_course
	$scope.openModal = function(course) {
		$scope.modal.show()
		$scope.selected_course = course;

	}

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

    $scope.is_daily = function(){
        if(!$scope.mode){
            return "hiding";
        }
    }


    $scope.is_weekly = function(){
        if($scope.mode){
            return "hiding";
        }
    }

})