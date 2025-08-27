import React from 'react'

export default function SideBar() {
  return (
    <>
    <div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-networking"></i>
							<span className="nav-text">Dashboard</span>
						</a>
                        <ul aria-expanded="false">
							<li><a href="index.html">Dashboard</a></li>
							<li><a href="index-2.html">Dashboard Dark<span className="badge badge-xs badge-danger ms-1">New</span></a></li>
							<li><a href="workout-statistic.html">Workout Statistic</a></li>
							<li><a href="workoutplan.html">Workout Plan</a></li>
							<li><a href="distance-map.html">Distance Map</a></li>
							<li><a href="food-menu.html">Diet Food Menu</a></li>
							<li><a href="personal-record.html">Personal Record</a></li>
						</ul>
                    </li>
					<li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-television"></i>
							<span className="nav-text">Apps</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="app-profile.html">Profile</a></li>
							<li><a href="post-details.html">Post Details</a></li>
                            <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                                <ul aria-expanded="false">
                                    <li><a href="email-compose.html">Compose</a></li>
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Read</a></li>
                                </ul>
                            </li>
                            <li><a href="app-calender.html">Calendar</a></li>
							<li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Shop</a>
                                <ul aria-expanded="false">
                                    <li><a href="ecom-product-grid.html">Product Grid</a></li>
									<li><a href="ecom-product-list.html">Product List</a></li>
									<li><a href="ecom-product-detail.html">Product Details</a></li>
									<li><a href="ecom-product-order.html">Order</a></li>
									<li><a href="ecom-checkout.html">Checkout</a></li>
									<li><a href="ecom-invoice.html">Invoice</a></li>
									<li><a href="ecom-customers.html">Customers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-compact-disc-1"></i>
							<span className="nav-text">Icons<span className="badge badge-danger badge-xs ms-1">NEW</span></span>
						</a>
                       <ul aria-expanded="false">
							<li><a href="flat-icons.html">Flaticons</a></li>
                            <li><a href="svg-icons.html">SVG Icons</a></li>
							<li><a href="feather.html">Feather Icons</a></li>
						</ul>
                    </li>
					<li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-briefcase"></i>
							<span className="nav-text">CMS<span className="badge badge-danger badge-xs ms-1">NEW</span></span>
						</a>
                       <ul aria-expanded="false">
							<li><a href="content.html">Content</a></li>
							<li><a href="content-add.html"> Add Content</a></li>
							<li><a href="menu.html">Menus</a></li>	
							<li><a href="email-template.html">Email Template</a></li>		
							<li><a href="add-email.html">Add Email</a></li>		
							<li><a href="blog.html">Blog</a></li>	
							<li><a href="add-blog.html">Add Blog</a></li>
							<li><a href="blog-category.html">Blog Category</a></li>	
						</ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-controls-3"></i>
							<span className="nav-text">Charts</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="chart-flot.html">Flot</a></li>
                            <li><a href="chart-morris.html">Morris</a></li>
                            <li><a href="chart-chartjs.html">Chartjs</a></li>
                            <li><a href="chart-chartist.html">Chartist</a></li>
                            <li><a href="chart-sparkline.html">Sparkline</a></li>
                            <li><a href="chart-peity.html">Peity</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-internet"></i>
							<span className="nav-text">Bootstrap</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="ui-accordion.html">Accordion</a></li>
                            <li><a href="ui-alert.html">Alert</a></li>
                            <li><a href="ui-badge.html">Badge</a></li>
                            <li><a href="ui-button.html">Button</a></li>
                            <li><a href="ui-modal.html">Modal</a></li>
                            <li><a href="ui-button-group.html">Button Group</a></li>
                            <li><a href="ui-list-group.html">List Group</a></li>
                            <li><a href="ui-media-object.html">Media Object</a></li>
                            <li><a href="ui-card.html">Cards</a></li>
                            <li><a href="ui-carousel.html">Carousel</a></li>
                            <li><a href="ui-dropdown.html">Dropdown</a></li>
                            <li><a href="ui-popover.html">Popover</a></li>
                            <li><a href="ui-progressbar.html">Progressbar</a></li>
                            <li><a href="ui-tab.html">Tab</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                            <li><a href="ui-pagination.html">Pagination</a></li>
                            <li><a href="ui-grid.html">Grid</a></li>

                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-heart"></i>
							<span className="nav-text">Plugins</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="uc-select2.html">Select 2</a></li>
                            <li><a href="uc-nestable.html">Nestedable</a></li>
                            <li><a href="uc-noui-slider.html">Noui Slider</a></li>
                            <li><a href="uc-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="uc-toastr.html">Toastr</a></li>
                            <li><a href="map-jqvmap.html">Jqv Map</a></li>
                            <li><a href="uc-lightgallery.html">Lightgallery</a></li>
                        </ul>
                    </li>
                    <li><a href="widget-basic.html" className="ai-icon" aria-expanded="false">
							<i className="flaticon-381-settings-2"></i>
							<span className="nav-text">Widget</span>
						</a>
					</li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-notepad"></i>
							<span className="nav-text">Forms</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="form-element.html">Form Elements</a></li>
                            <li><a href="form-wizard.html">Wizard</a></li>
                            <li><a href="editor.html">Editor</a></li>
                            <li><a href="form-pickers.html">Pickers</a></li>
                            <li><a href="form-validation-jquery.html">Jquery Validate</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-network"></i>
							<span className="nav-text">Table</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                            <li><a href="table-datatable-basic.html">Datatable</a></li>
                        </ul>
                    </li>
                    <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
							<i className="flaticon-381-layer-1"></i>
							<span className="nav-text">Pages</span>
						</a>
                        <ul aria-expanded="false">
                            <li><a href="page-register.html">Register</a></li>
                            <li><a href="page-login.html">Login</a></li>
                            <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                                <ul aria-expanded="false">
                                    <li><a href="page-error-400.html">Error 400</a></li>
                                    <li><a href="page-error-403.html">Error 403</a></li>
                                    <li><a href="page-error-404.html">Error 404</a></li>
                                    <li><a href="page-error-500.html">Error 500</a></li>
                                    <li><a href="page-error-503.html">Error 503</a></li>
                                </ul>
                            </li>
                            <li><a href="page-lock-screen.html">Lock Screen</a></li>
                        </ul>
                    </li>
                </ul>
				<div className="add-menu-sidebar">
					<img src="images/calendar.png" alt="" className="me-3" />
					<a href="workoutplan.html" className="font-w500 mb-0">Create Workout Plan Now</a>
				</div>
				<div className="copyright">
					<p><strong>Gymove Fitness Admin Dashboard</strong> © 2023 All Rights Reserved</p>
					<p>Made with <span className="heart"></span> by DexignZone</p>
				</div>
			</div>
    </div>    
    </>
  )
}
