import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
	  
		<header>
			<h1>Big Picture</h1>
			<nav>
				<ul>
					<li><a href="#intro">Intro</a></li>
					<li><a href="#one">What I Do</a></li>
					<li><a href="#two">Who I Am</a></li>
					<li><a href="#work">My Work</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>

		<section>
			<h2>Hey.</h2>
			<p>Welcome to <strong>Big Picture</strong> a responsive site template designed
			by <a href="#">HTML5</a>, built on <a href="#">Builder</a>,
			and released for free under the <a href="#">Creative Commons Attribution license</a>.</p>
		</section>

		<section>
			<div>
				<h2>What I Do</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
				Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
				id varius justo euismod in. Curabitur egestas consectetur magna.</p>
			</div>
			<a href="#two">Next</a>
		</section>

		<section>
			<div>
				<h2>Who I Am</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
				Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
				id varius justo euismod in. Curabitur egestas consectetur magna.</p>
			</div>
			<a href="#work">Next</a>
		</section>

			<section>
				<div>
					<h2>My Work</h2>
					<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
					Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
					arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
				

					<ul>
						<li>
							<a href="images/fulls/01.jpg"><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
						</li>
						<li>
							<a href="images/fulls/02.jpg"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
						</li>
						<li>
							<a href="images/fulls/03.jpg"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
						</li>
						<li>
							<a href="images/fulls/04.jpg"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
						</li>
						<li>
							<a href="images/fulls/05.jpg"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
						</li>
						<li>
							<a href="images/fulls/06.jpg"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
						</li>
					</ul>

				</div>
			</section>

			<div>
				<div>
					<div>
						<h2>Say Hello.</h2>
						<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					</div>
					<div>
						<form method="post" action="#">
							<div><input type="text" name="name" placeholder="Name" /></div>
							<div><input type="email" name="email" placeholder="Email" /></div>
							<div><textarea name="message" placeholder="Message" rows="6"></textarea></div>
							<div>
								<input type="submit" value="Send Message" />
							</div>
						</form>
					</div>
				</div>
			</div>

			<div>

				<!-- Icons -->
					<ul>
						<li><a href="#"><span>Twitter</span></a></li>
						<li><a href="#"><span>Facebook</span></a></li>
						<li><a href="#"><span>Instagram</span></a></li>
						<li><a href="#"><span>LinkedIn</span></a></li>
						<li><a href="#"><span>Dribbble</span></a></li>
						<li><a href="#"><span>Pinterest</span></a></li>
					</ul>

					<ul>
						<li>&copy; Untitled</li><li>Design: <a href="#">HTML5</a></li>
					</ul>

			</div>
	  </main>
    );
  }
}

export default App;
