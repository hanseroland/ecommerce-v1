import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() { 
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
       {/* <p className='footer-subscription-heading'>
           Materialisez vos idées dès maintenant
  </p>*/}
        <p className='footer-subscription-text'>
          Abonnez-vous à notre newsletter.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'incrire</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À propos</h2>
            <Link to='/sign-up'>S'inscrire</Link>
            <Link to='/'>Service client</Link>
            <Link to='/'>Aide</Link>
            <Link to='/'>Vos informations personnelles</Link>
            <Link to='/'>Conditions générales de vente</Link>
            <Link to='/'>Termes et Services</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Qui sommes-nous</h2>
            <Link to='/'>Contactez-nous</Link>
            <Link to='/'>Carrière</Link>
            <Link to='/'>Vendez sur ecommerce</Link>
            <Link to='/'>Nos partanaires</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Paiements</h2>
            <Link to='/'>Carte bancaire</Link>
            <Link to='/'>Airtel Money</Link>
            <Link to='/'>Mobi Cash</Link>
            <Link to='/'>PayPal</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Assistance</h2>
            <Link to='/'>Application ecommerce</Link>
            <Link to='/'>Tarifs de livraison</Link>
            <Link to='/'>Retour et remboursement</Link>
            <Link to='/'>Commander à l'étranger</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ecommerce
             { /*<i class='fab fa-typo3' />*/}
            </Link>
          </div>
          <small class='website-rights'>By HRP-CODE © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> 
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;