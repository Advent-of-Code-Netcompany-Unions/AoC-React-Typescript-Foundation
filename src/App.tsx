import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { Day1 } from './day1/Day1';
import { Day2 } from './day2/Day2';
import { Day3 } from './day3/Day3';
import { Day4 } from './day4/Day4';
import { Day5 } from './day5/Day5';
import { Day6 } from './day6/Day6';
import { Day7 } from './day7/Day7';
import { Day8 } from './day8/Day8';
import { Day9 } from './day9/Day9';
import { Day10 } from './day10/Day10';
import { Day11 } from './day11/Day11';
import { Day12 } from './day12/Day12';
import { Day13 } from './day13/Day13';
import { Day14 } from './day14/Day14';
import { Day15 } from './day15/Day15';
import { Day16 } from './day16/Day16';
import { Day17 } from './day17/Day17';
import { Day18 } from './day18/Day18';
import { Day19 } from './day19/Day19';
import { Day20 } from './day20/Day20';
import { Day21 } from './day21/Day21';
import { Day22 } from './day22/Day22';
import { Day23 } from './day23/Day23';
import { Day24 } from './day24/Day24';
import { Day25 } from './day25/Day25';
import { Experiments } from './experiments/Experiments';
function App() {
  return (
    <Router>
    <div>
      <nav style={{display: 'flex'}}>
        <ul>
          <li>
            <Link to="/day1">Day 1</Link>
          </li>
          <li>
            <Link to="/day2">Day 2</Link>
          </li>
          <li>
            <Link to="/day3">Day 3</Link>
          </li>
          <li>
            <Link to="/day4">Day 4</Link>
          </li>
          <li>
            <Link to="/day5">Day 5</Link>
          </li>
          <li>
            <Link to="/day6">Day 6</Link>
          </li>
          <li>
            <Link to="/day7">Day 7</Link>
          </li>
          <li>
            <Link to="/day8">Day 8</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/day9">Day 9</Link>
          </li>
          <li>
            <Link to="/day10">Day 10</Link>
          </li>
          <li>
            <Link to="/day11">Day 11</Link>
          </li>
          <li>
            <Link to="/day12">Day 12</Link>
          </li>
          <li>
            <Link to="/day13">Day 13</Link>
          </li>
          <li>
            <Link to="/day14">Day 14</Link>
          </li>
          <li>
            <Link to="/day15">Day 15</Link>
          </li>
          <li>
            <Link to="/day16">Day 16</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/day17">Day 17</Link>
          </li>
          <li>
            <Link to="/day18">Day 18</Link>
          </li>
          <li>
            <Link to="/day19">Day 19</Link>
          </li>
          <li>
            <Link to="/day20">Day 20</Link>
          </li>
          <li>
            <Link to="/day21">Day 21</Link>
          </li>
          <li>
            <Link to="/day22">Day 22</Link>
          </li>
          <li>
            <Link to="/day23">Day 23</Link>
          </li>
          <li>
            <Link to="/day24">Day 24</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/day25">Day 25</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/day1" component={Day1}></Route>
        <Route path="/day2" component={Day2}></Route>
        <Route path="/day3" component={Day3}></Route>
        <Route path="/day4" component={Day4}></Route>
        <Route path="/day5" component={Day5}></Route>
        <Route path="/day6" component={Day6}></Route>
        <Route path="/day7" component={Day7}></Route>
        <Route path="/day8" component={Day8}></Route>
        <Route path="/day9" component={Day9}></Route>
        <Route path="/day10" component={Day10}></Route>
        <Route path="/day11" component={Day11}></Route>
        <Route path="/day12" component={Day12}></Route>
        <Route path="/day13" component={Day13}></Route>
        <Route path="/day14" component={Day14}></Route>
        <Route path="/day15" component={Day15}></Route>
        <Route path="/day16" component={Day16}></Route>
        <Route path="/day17" component={Day17}></Route>
        <Route path="/day18" component={Day18}></Route>
        <Route path="/day19" component={Day19}></Route>
        <Route path="/day20" component={Day20}></Route>
        <Route path="/day21" component={Day21}></Route>
        <Route path="/day22" component={Day22}></Route>
        <Route path="/day23" component={Day23}></Route>
        <Route path="/day24" component={Day24}></Route>
        <Route path="/day25" component={Day25}></Route>
        <Route path="/experiments" component={Experiments}></Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
