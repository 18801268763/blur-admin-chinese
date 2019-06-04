/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2019-06-04',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '研究angular7文档',
          start: '2019-06-04',
          color: dashboardColors.silverTree
        },
        {
          title: '做微信小程序',
          start: '2019-06-04',
          end: '2019-06-06',
          color: dashboardColors.blueStone
        },
        {
          title: '晚餐',
          start: '2019-06-04T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: '生日聚会',
          start: '2019-06-04T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();